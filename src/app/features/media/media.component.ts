import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MediaService } from '../../core/services/media.service';
import { MediaPhoto, MediaVideo } from '../../core/models/tripura-data.model';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto space-y-10">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0e2554] text-xs font-bold uppercase tracking-wider mb-3">
            <i class="fa-solid fa-photo-film text-amber-500"></i>
            <span>Visual Archives & Video Broadcasts</span>
          </div>
          <h1 class="text-3xl sm:text-4xl font-black text-[#0b1e42] tracking-tight">Media & Press Gallery</h1>
          <p class="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            High-resolution photography and video documentations of conclaves, relief drives, athletic meets, and leadership speeches across Tripura.
          </p>
        </div>

        <!-- Main Tab Switcher: Photos vs Videos -->
        <div class="flex items-center justify-center">
          <div class="bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-2">
            <button (click)="activeMediaType = 'photos'" 
                    [ngClass]="activeMediaType === 'photos' ? 'bg-[#0e2554] text-white shadow' : 'text-slate-600 hover:text-slate-900'"
                    class="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2">
              <i class="fa-regular fa-images"></i>
              <span>Photo Albums ({{ allPhotos.length }})</span>
            </button>

            <button (click)="activeMediaType = 'videos'" 
                    [ngClass]="activeMediaType === 'videos' ? 'bg-[#0e2554] text-white shadow' : 'text-slate-600 hover:text-slate-900'"
                    class="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2">
              <i class="fa-solid fa-circle-play"></i>
              <span>Video Broadcasts ({{ allVideos.length }})</span>
            </button>
          </div>
        </div>

        <!-- ================= PHOTOS TAB ================= -->
        <div *ngIf="activeMediaType === 'photos'" class="space-y-8 animate-fadeIn">
          
          <!-- Filters: Event-wise, District-wise, Date-wise -->
          <div class="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-4">
            <!-- Event-wise Filter -->
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Filter by Event</label>
              <select [(ngModel)]="filterEvent" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none">
                <option value="All">All Events</option>
                <option *ngFor="let ev of photoEvents" [value]="ev">{{ ev }}</option>
              </select>
            </div>

            <!-- District-wise Filter -->
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Filter by District</label>
              <select [(ngModel)]="filterDistrict" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none">
                <option value="All">All 8 Districts</option>
                <option *ngFor="let dist of photoDistricts" [value]="dist">{{ dist }}</option>
              </select>
            </div>

            <!-- Date-wise Filter -->
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Filter by Timeline</label>
              <select [(ngModel)]="filterDate" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none">
                <option value="All">All Dates / Months</option>
                <option *ngFor="let d of photoDates" [value]="d">{{ d }}</option>
              </select>
            </div>
          </div>

          <!-- Photos Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div *ngFor="let photo of filteredPhotos" 
                 (click)="openLightbox(photo)"
                 class="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition cursor-pointer group flex flex-col justify-between">
              <div>
                <div class="relative aspect-video overflow-hidden bg-slate-900">
                  <img [src]="photo.imageUrl" [alt]="photo.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span class="w-10 h-10 rounded-full bg-white/90 text-[#0e2554] flex items-center justify-center shadow">
                      <i class="fa-solid fa-magnifying-glass-plus"></i>
                    </span>
                  </div>
                  <span class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-bold bg-white/90 backdrop-blur-sm text-[#0e2554]">
                    {{ photo.district }}
                  </span>
                </div>

                <div class="p-4">
                  <div class="text-[10px] text-amber-600 font-bold uppercase mb-1">{{ photo.eventName }} • {{ photo.date }}</div>
                  <h4 class="text-sm font-bold text-slate-900 leading-snug line-clamp-2">{{ photo.title }}</h4>
                  <p class="text-xs text-slate-500 mt-1 line-clamp-2">{{ photo.caption }}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- ================= VIDEOS TAB ================= -->
        <div *ngIf="activeMediaType === 'videos'" class="space-y-8 animate-fadeIn">
          
          <!-- Video Category Filter: Event videos, Interviews, Speeches, Program highlights -->
          <div class="flex flex-wrap items-center justify-center gap-2">
            <button (click)="videoCategory = 'All'" 
                    [ngClass]="videoCategory === 'All' ? 'bg-[#0e2554] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'"
                    class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition">
              All Videos
            </button>
            <button *ngFor="let cat of videoCategories" 
                    (click)="videoCategory = cat" 
                    [ngClass]="videoCategory === cat ? 'bg-[#0e2554] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'"
                    class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition">
              {{ cat }}
            </button>
          </div>

          <!-- Video Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div *ngFor="let vid of filteredVideos" 
                 class="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition">
              
              <div class="relative h-60 overflow-hidden bg-slate-900 group cursor-pointer" (click)="openVideo(vid)">
                <img [src]="vid.thumbnailUrl" [alt]="vid.title" class="w-full h-full object-cover opacity-85 group-hover:opacity-75 transition" />
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-16 h-16 rounded-full bg-white/95 text-red-600 flex items-center justify-center text-2xl shadow-xl group-hover:scale-110 transition">
                    <i class="fa-solid fa-play ml-1"></i>
                  </div>
                </div>
                <span class="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/80 text-white font-mono text-[11px] font-bold">
                  {{ vid.duration }}
                </span>
                <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-amber-500 text-white shadow">
                  {{ vid.category }}
                </span>
              </div>

              <div class="p-6">
                <div class="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span><i class="fa-regular fa-calendar mr-1"></i>{{ vid.date }}</span>
                  <span class="font-bold text-[#0e2554]"><i class="fa-solid fa-microphone mr-1"></i>{{ vid.speaker }}</span>
                </div>
                <h3 class="text-base font-bold text-slate-900 leading-snug">{{ vid.title }}</h3>
                <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <button (click)="openVideo(vid)" class="text-[#0e2554] hover:underline flex items-center gap-1">
                    <span>Watch Broadcast</span>
                    <i class="fa-solid fa-play text-[10px]"></i>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

        <!-- ================= LIGHTBOX MODAL FOR PHOTOS ================= -->
        <div *ngIf="activePhoto" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div class="max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative animate-fadeIn text-white">
            <button (click)="closeLightbox()" class="absolute top-4 right-4 text-white/80 hover:text-white p-2 text-xl z-10">
              <i class="fa-solid fa-xmark"></i>
            </button>
            <img [src]="activePhoto.imageUrl" [alt]="activePhoto.title" class="w-full max-h-[70vh] object-contain bg-black" />
            <div class="p-6 bg-slate-900 border-t border-slate-800">
              <div class="flex items-center gap-2 text-xs text-amber-400 font-bold mb-1">
                <span>{{ activePhoto.district }} District</span>
                <span>•</span>
                <span>{{ activePhoto.eventName }}</span>
                <span>•</span>
                <span>{{ activePhoto.date }}</span>
              </div>
              <h3 class="text-lg font-bold">{{ activePhoto.title }}</h3>
              <p class="text-xs text-slate-300 mt-1">{{ activePhoto.caption }}</p>
            </div>
          </div>
        </div>

        <!-- ================= VIDEO PLAYER MODAL ================= -->
        <div *ngIf="activeVideo" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div class="max-w-3xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative animate-fadeIn text-white">
            <button (click)="closeVideo()" class="absolute top-4 right-4 text-white/80 hover:text-white p-2 text-xl z-10">
              <i class="fa-solid fa-xmark"></i>
            </button>
            <div class="aspect-video bg-black flex flex-col items-center justify-center p-8 text-center">
              <i class="fa-brands fa-youtube text-5xl text-red-600 mb-3 animate-pulse"></i>
              <h4 class="text-lg font-bold">{{ activeVideo.title }}</h4>
              <p class="text-xs text-slate-400 mt-1">{{ activeVideo.speaker }} • Duration: {{ activeVideo.duration }}</p>
              <a [href]="activeVideo.videoUrl" target="_blank" rel="noopener" class="mt-4 px-6 py-2.5 rounded-xl bg-red-600 text-white font-bold text-xs hover:bg-red-700 transition shadow">
                Open in Official Stream Channel ↗
              </a>
            </div>
            <div class="p-5 bg-slate-900 border-t border-slate-800 text-xs text-slate-300 flex items-center justify-between">
              <span>Category: {{ activeVideo.category }}</span>
              <span>Recorded: {{ activeVideo.date }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  `
})
export class MediaComponent implements OnInit {
  mediaService = inject(MediaService);

  activeMediaType: 'photos' | 'videos' = 'photos';

  allPhotos: MediaPhoto[] = [];
  allVideos: MediaVideo[] = [];

  filterEvent = 'All';
  filterDistrict = 'All';
  filterDate = 'All';

  photoEvents: string[] = [];
  photoDistricts: string[] = [];
  photoDates: string[] = [];

  videoCategory = 'All';
  videoCategories = ['Event videos', 'Interviews', 'Speeches', 'Program highlights'];

  activePhoto: MediaPhoto | null = null;
  activeVideo: MediaVideo | null = null;

  ngOnInit(): void {
    this.allPhotos = this.mediaService.getPhotos();
    this.allVideos = this.mediaService.getVideos();

    this.photoEvents = Array.from(new Set(this.allPhotos.map(p => p.eventName)));
    this.photoDistricts = Array.from(new Set(this.allPhotos.map(p => p.district)));
    this.photoDates = Array.from(new Set(this.allPhotos.map(p => p.date)));
  }

  get filteredPhotos(): MediaPhoto[] {
    return this.allPhotos.filter(p => {
      const matchEvent = this.filterEvent === 'All' || p.eventName === this.filterEvent;
      const matchDist = this.filterDistrict === 'All' || p.district === this.filterDistrict;
      const matchDate = this.filterDate === 'All' || p.date === this.filterDate;
      return matchEvent && matchDist && matchDate;
    });
  }

  get filteredVideos(): MediaVideo[] {
    if (this.videoCategory === 'All') return this.allVideos;
    return this.allVideos.filter(v => v.category === this.videoCategory);
  }

  openLightbox(photo: MediaPhoto): void {
    this.activePhoto = photo;
  }

  closeLightbox(): void {
    this.activePhoto = null;
  }

  openVideo(vid: MediaVideo): void {
    this.activeVideo = vid;
  }

  closeVideo(): void {
    this.activeVideo = null;
  }
}

