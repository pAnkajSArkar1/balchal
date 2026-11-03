import { Injectable } from '@angular/core';
import { MediaPhoto, MediaVideo } from '../models/tripura-data.model';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private readonly photos: MediaPhoto[] = [
    {
      id: 'p-1',
      title: 'Statewide Youth Leadership Convention 2026',
      eventName: 'Youth Conclave',
      district: 'West Tripura',
      date: 'Oct 2026',
      imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
      caption: 'Over 2,500 youth delegates assembled at Rabindra Satabarshiki Bhavan, Agartala.'
    },
    {
      id: 'p-2',
      title: 'Mega Blood Donation Drive at GB Pant Hospital',
      eventName: 'Blood Camp',
      district: 'West Tripura',
      date: 'Oct 2026',
      imageUrl: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80',
      caption: 'Youth donors voluntarily contributing 180 units of rare blood groups.'
    },
    {
      id: 'p-3',
      title: 'Gomati Riverbank Rejuvenation Cleanliness Drive',
      eventName: 'Cleanliness Drive',
      district: 'Gomati',
      date: 'Sep 2026',
      imageUrl: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80',
      caption: 'Volunteers collecting plastic waste and planting 500 bamboo saplings in Udaipur.'
    },
    {
      id: 'p-4',
      title: 'Sepahijala Inter-Mandal Football Finals',
      eventName: 'Sports Meet',
      district: 'Sepahijala',
      date: 'Sep 2026',
      imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
      caption: 'Bishalgarh youth team clinching the victory trophy in Sonamura stadium.'
    },
    {
      id: 'p-5',
      title: 'Unakoti Heritage Protection & Tourist Assistance Brigade',
      eventName: 'Heritage Drive',
      district: 'Unakoti',
      date: 'Aug 2026',
      imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
      caption: 'Youth volunteers guiding pilgrims and maintaining rock-cut heritage pathways.'
    },
    {
      id: 'p-6',
      title: 'Digital Literacy Workshop in Dhalai Tribal School',
      eventName: 'Skill Workshop',
      district: 'Dhalai',
      date: 'Aug 2026',
      imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      caption: 'Students receiving their first hands-on programming session in Ambassa.'
    },
    {
      id: 'p-7',
      title: 'South Tripura Free Coaching Camp Inauguration',
      eventName: 'Education Helpdesk',
      district: 'South Tripura',
      date: 'Jul 2026',
      imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
      caption: 'Belonia youth library equipped with competitive examination study materials.'
    },
    {
      id: 'p-8',
      title: 'North Tripura Flood Relief Volunteer Mobilization',
      eventName: 'Community Relief',
      district: 'North Tripura',
      date: 'Jul 2026',
      imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
      caption: 'Distributing clean water filters and food grains to marooned families in Dharmanagar.'
    }
  ];

  private readonly videos: MediaVideo[] = [
    {
      id: 'v-1',
      title: 'Keynote Address: Empowering Tripura’s Next Generation of Entrepreneurs',
      category: 'Speeches',
      duration: '18:42 min',
      date: 'Oct 2026',
      videoUrl: 'https://www.youtube.com',
      thumbnailUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
      speaker: 'Shri Bipin Debbarma (State President)'
    },
    {
      id: 'v-2',
      title: 'Highlights: Khel Tripura 2026 - Football & Indigenous Athletics',
      category: 'Program highlights',
      duration: '06:15 min',
      date: 'Oct 2026',
      videoUrl: 'https://www.youtube.com',
      thumbnailUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
      speaker: 'Youth Sports Council'
    },
    {
      id: 'v-3',
      title: 'Interview: How Rakta Sampark Mobilized 500 Blood Donors in 48 Hours',
      category: 'Interviews',
      duration: '12:30 min',
      date: 'Sep 2026',
      videoUrl: 'https://www.youtube.com',
      thumbnailUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      speaker: 'Dr. S. Roy & Youth Emergency Coordinators'
    },
    {
      id: 'v-4',
      title: 'Full Coverage: 60 Mandals Mega Youth Conclave at Agartala',
      category: 'Event videos',
      duration: '45:10 min',
      date: 'Aug 2026',
      videoUrl: 'https://www.youtube.com',
      thumbnailUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
      speaker: 'State Executive & Youth Leaders'
    }
  ];

  getPhotos(): MediaPhoto[] {
    return this.photos;
  }

  getVideos(): MediaVideo[] {
    return this.videos;
  }
}

