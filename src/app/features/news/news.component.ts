import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NewsService } from '../../core/services/news.service';
import { NewsPost } from '../../core/models/tripura-data.model';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto space-y-10">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0e2554] text-xs font-bold uppercase tracking-wider mb-3">
            <i class="fa-solid fa-newspaper text-amber-500"></i>
            <span>State Media & Press Information Bureau</span>
          </div>
          <h1 class="text-3xl sm:text-4xl font-black text-[#0b1e42] tracking-tight">News, Press Releases & Announcements</h1>
          <p class="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Stay updated with official communiqués, youth development policies, district bulletins, and organizational updates from across Tripura.
          </p>
        </div>

        <!-- Search & Category Filters -->
        <div class="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <!-- Search Bar -->
          <div class="relative max-w-md mx-auto">
            <i class="fa-solid fa-magnifying-glass absolute left-4 top-3 text-slate-400 text-sm"></i>
            <input type="text" [(ngModel)]="searchTerm" placeholder="Search news, topics, keywords..." 
                   class="w-full pl-11 pr-4 py-2.5 rounded-2xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <!-- Category Pills -->
          <div class="flex flex-wrap items-center justify-center gap-2">
            <button (click)="selectedCategory = 'All'" 
                    [ngClass]="selectedCategory === 'All' ? 'bg-[#0e2554] text-white shadow' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'"
                    class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition">
              All Updates
            </button>
            <button *ngFor="let cat of categories" 
                    (click)="selectedCategory = cat" 
                    [ngClass]="selectedCategory === cat ? 'bg-[#0e2554] text-white shadow' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'"
                    class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition">
              {{ cat }}
            </button>
          </div>
        </div>

        <!-- News Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let post of filteredPosts" 
               class="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between group">
            <div>
              <div class="relative h-48 overflow-hidden">
                <img [src]="post.featuredImage" [alt]="post.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-slate-900 shadow">
                  {{ post.category }}
                </span>
                <span *ngIf="post.isAnnouncement" class="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-500 text-white shadow animate-pulse">
                  Urgent
                </span>
              </div>

              <div class="p-6">
                <div class="flex items-center justify-between text-[11px] text-slate-400 mb-2 font-medium">
                  <span><i class="fa-regular fa-calendar mr-1"></i>{{ post.date }}</span>
                  <span><i class="fa-solid fa-building mr-1"></i>{{ post.author }}</span>
                </div>

                <h3 class="text-base font-bold text-[#0b1e42] leading-snug mb-2 group-hover:text-blue-700 transition">
                  {{ post.title }}
                </h3>

                <p class="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {{ post.summary }}
                </p>

                <!-- Tags -->
                <div class="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  <span *ngFor="let tag of post.tags" class="text-[10px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                    #{{ tag }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Footer: Read & Share Button -->
            <div class="p-6 pt-0 flex items-center justify-between">
              <button (click)="openPost(post)" class="text-xs font-bold text-[#0e2554] hover:underline flex items-center gap-1.5">
                <span>Read Full Story</span>
                <i class="fa-solid fa-arrow-right text-[10px]"></i>
              </button>

              <button (click)="openPost(post)" title="Share Article" class="text-slate-400 hover:text-blue-600 transition p-1.5">
                <i class="fa-solid fa-share-nodes text-sm"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- ================= FULL ARTICLE MODAL WITH SHARING ================= -->
        <div *ngIf="selectedPost" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div class="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative animate-fadeIn">
            
            <button (click)="closePost()" class="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2">
              <i class="fa-solid fa-xmark text-xl"></i>
            </button>

            <!-- Article Header -->
            <div class="mb-4">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-blue-100 text-[#0e2554]">
                {{ selectedPost.category }}
              </span>
              <h2 class="text-xl sm:text-2xl font-black text-[#0b1e42] mt-2 leading-tight">
                {{ selectedPost.title }}
              </h2>
              <div class="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-3 pb-4 border-b border-slate-100">
                <span><i class="fa-regular fa-calendar mr-1 text-slate-400"></i>{{ selectedPost.date }}</span>
                <span><i class="fa-solid fa-user-pen mr-1 text-slate-400"></i>{{ selectedPost.author }}</span>
                <span><i class="fa-solid fa-location-dot mr-1 text-slate-400"></i>{{ selectedPost.organization }}</span>
              </div>
            </div>

            <!-- Featured Image -->
            <div class="rounded-2xl overflow-hidden mb-6 aspect-video">
              <img [src]="selectedPost.featuredImage" [alt]="selectedPost.title" class="w-full h-full object-cover" />
            </div>

            <!-- Content -->
            <div class="prose text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line mb-6">
              {{ selectedPost.content }}
            </div>

            <!-- Share Options Block -->
            <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div class="text-xs font-bold text-slate-700">Share this post:</div>
              <div class="flex items-center gap-2">
                <button (click)="shareOn('whatsapp')" class="w-9 h-9 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center text-sm shadow">
                  <i class="fa-brands fa-whatsapp"></i>
                </button>
                <button (click)="shareOn('twitter')" class="w-9 h-9 rounded-full bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center text-sm shadow">
                  <i class="fa-brands fa-x-twitter"></i>
                </button>
                <button (click)="shareOn('facebook')" class="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center text-sm shadow">
                  <i class="fa-brands fa-facebook-f"></i>
                </button>
                <button (click)="copyLink()" class="px-3 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs transition">
                  <i class="fa-regular fa-copy mr-1"></i>{{ copySuccess ? 'Copied!' : 'Copy Link' }}
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  `
})
export class NewsComponent implements OnInit {
  newsService = inject(NewsService);

  allPosts: NewsPost[] = [];
  selectedCategory = 'All';
  searchTerm = '';
  selectedPost: NewsPost | null = null;
  copySuccess = false;

  categories = [
    'Organizational Updates',
    'Press Releases',
    'Event Updates',
    'Important Announcements',
    'District Updates',
    'Youth-related Updates'
  ];

  ngOnInit(): void {
    this.allPosts = this.newsService.getAll();
  }

  get filteredPosts(): NewsPost[] {
    return this.allPosts.filter(p => {
      const matchCat = this.selectedCategory === 'All' || p.category === this.selectedCategory;
      const matchSearch = !this.searchTerm || 
        p.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        p.summary.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(this.searchTerm.toLowerCase()));
      return matchCat && matchSearch;
    });
  }

  openPost(post: NewsPost): void {
    this.selectedPost = post;
    this.copySuccess = false;
  }

  closePost(): void {
    this.selectedPost = null;
  }

  shareOn(platform: 'whatsapp' | 'twitter' | 'facebook'): void {
    if (!this.selectedPost) return;
    const url = window.location.href;
    const text = encodeURIComponent(`${this.selectedPost.title} - Yuva Morcha Tripura: ${url}`);
    if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    }
  }

  copyLink(): void {
    navigator.clipboard.writeText(window.location.href);
    this.copySuccess = true;
    setTimeout(() => this.copySuccess = false, 2000);
  }
}
