import { Injectable } from '@angular/core';
import { District, Mandal } from '../models/tripura-data.model';

@Injectable({
  providedIn: 'root'
})
export class TripuraGeoService {
  private readonly districtsData: District[] = [
    {
      id: 'west-tripura',
      name: 'West Tripura',
      headquarters: 'Agartala',
      populationApprox: '9.2 Lakhs',
      mandals: [
        { id: 'agartala', name: 'Agartala (Town)', districtId: 'west-tripura', boothCount: 48, contactLead: 'Shri R. Debbarma' },
        { id: 'banamalipur', name: 'Banamalipur', districtId: 'west-tripura', boothCount: 42, contactLead: 'Smt. S. Saha' },
        { id: 'badharghat', name: 'Badharghat', districtId: 'west-tripura', boothCount: 51, contactLead: 'Shri P. Chakraborty' },
        { id: 'pratapgarh', name: 'Pratapgarh', districtId: 'west-tripura', boothCount: 46, contactLead: 'Shri A. Das' },
        { id: 'ramnagar', name: 'Ramnagar', districtId: 'west-tripura', boothCount: 44, contactLead: 'Shri D. Bhattacharjee' },
        { id: 'khayerpur', name: 'Khayerpur', districtId: 'west-tripura', boothCount: 47, contactLead: 'Shri M. Ghosh' },
        { id: 'majlishpur', name: 'Majlishpur', districtId: 'west-tripura', boothCount: 49, contactLead: 'Shri S. Roy' },
        { id: 'suryamaninagar', name: 'Suryamaninagar', districtId: 'west-tripura', boothCount: 53, contactLead: 'Shri T. Nath' }
      ]
    },
    {
      id: 'sepahijala',
      name: 'Sepahijala',
      headquarters: 'Bishramganj',
      populationApprox: '4.8 Lakhs',
      mandals: [
        { id: 'bishalgarh', name: 'Bishalgarh', districtId: 'sepahijala', boothCount: 46, contactLead: 'Shri K. Jamatia' },
        { id: 'sonamura', name: 'Sonamura', districtId: 'sepahijala', boothCount: 43, contactLead: 'Shri R. Barman' },
        { id: 'dhanpur', name: 'Dhanpur', districtId: 'sepahijala', boothCount: 50, contactLead: 'Shri B. Debnath' },
        { id: 'nalchar', name: 'Nalchar', districtId: 'sepahijala', boothCount: 41, contactLead: 'Shri P. Sarkar' },
        { id: 'boxanagar', name: 'Boxanagar', districtId: 'sepahijala', boothCount: 45, contactLead: 'Shri T. Ali' },
        { id: 'charilam', name: 'Charilam', districtId: 'sepahijala', boothCount: 48, contactLead: 'Shri H. Tripura' }
      ]
    },
    {
      id: 'gomati',
      name: 'Gomati',
      headquarters: 'Udaipur',
      populationApprox: '4.4 Lakhs',
      mandals: [
        { id: 'udaipur-radhakishorepur', name: 'Radhakishorepur (Udaipur)', districtId: 'gomati', boothCount: 45, contactLead: 'Shri B. Pal' },
        { id: 'matabari', name: 'Matabari', districtId: 'gomati', boothCount: 49, contactLead: 'Shri K. Roy' },
        { id: 'kakraban-salgarh', name: 'Kakraban-Salgarh', districtId: 'gomati', boothCount: 47, contactLead: 'Shri J. Das' },
        { id: 'amarpur', name: 'Amarpur', districtId: 'gomati', boothCount: 52, contactLead: 'Shri D. Reang' },
        { id: 'karbook', name: 'Karbook', districtId: 'gomati', boothCount: 44, contactLead: 'Shri N. Chakma' }
      ]
    },
    {
      id: 'south-tripura',
      name: 'South Tripura',
      headquarters: 'Belonia',
      populationApprox: '4.3 Lakhs',
      mandals: [
        { id: 'belonia', name: 'Belonia', districtId: 'south-tripura', boothCount: 46, contactLead: 'Shri G. Majumder' },
        { id: 'santirbazar', name: 'Santirbazar', districtId: 'south-tripura', boothCount: 48, contactLead: 'Shri S. Mog' },
        { id: 'jolaibari', name: 'Jolaibari', districtId: 'south-tripura', boothCount: 44, contactLead: 'Shri R. Debbarma' },
        { id: 'manu', name: 'Manu', districtId: 'south-tripura', boothCount: 42, contactLead: 'Shri B. Tripura' },
        { id: 'hrishyamukh', name: 'Hrishyamukh', districtId: 'south-tripura', boothCount: 45, contactLead: 'Shri D. Bhowmik' },
        { id: 'rajnagar', name: 'Rajnagar', districtId: 'south-tripura', boothCount: 47, contactLead: 'Shri P. Sen' }
      ]
    },
    {
      id: 'khowai',
      name: 'Khowai',
      headquarters: 'Khowai',
      populationApprox: '3.3 Lakhs',
      mandals: [
        { id: 'khowai-town', name: 'Khowai', districtId: 'khowai', boothCount: 43, contactLead: 'Shri M. Das' },
        { id: 'teliamura', name: 'Teliamura', districtId: 'khowai', boothCount: 49, contactLead: 'Shri A. Roy' },
        { id: 'kalyanpur-pramodnagar', name: 'Kalyanpur-Pramodnagar', districtId: 'khowai', boothCount: 46, contactLead: 'Shri S. Bhattacharya' },
        { id: 'asharambari', name: 'Asharambari', districtId: 'khowai', boothCount: 44, contactLead: 'Shri K. Debbarma' }
      ]
    },
    {
      id: 'dhalai',
      name: 'Dhalai',
      headquarters: 'Ambassa',
      populationApprox: '3.8 Lakhs',
      mandals: [
        { id: 'ambassa', name: 'Ambassa', districtId: 'dhalai', boothCount: 47, contactLead: 'Shri C. Malakar' },
        { id: 'kamalpur', name: 'Kamalpur', districtId: 'dhalai', boothCount: 44, contactLead: 'Shri P. Paul' },
        { id: 'surma', name: 'Surma', districtId: 'dhalai', boothCount: 42, contactLead: 'Shri S. Das' },
        { id: 'chawmanu', name: 'Chawmanu', districtId: 'dhalai', boothCount: 48, contactLead: 'Shri K. Reang' },
        { id: 'gandatwisa', name: 'Gandatwisa (Raima Valley)', districtId: 'dhalai', boothCount: 45, contactLead: 'Shri B. Tripura' }
      ]
    },
    {
      id: 'unakoti',
      name: 'Unakoti',
      headquarters: 'Kailashahar',
      populationApprox: '2.8 Lakhs',
      mandals: [
        { id: 'kailashahar', name: 'Kailashahar', districtId: 'unakoti', boothCount: 46, contactLead: 'Shri A. Sinha' },
        { id: 'chandipur', name: 'Chandipur', districtId: 'unakoti', boothCount: 43, contactLead: 'Shri N. Deb' },
        { id: 'fatikroy', name: 'Fatikroy', districtId: 'unakoti', boothCount: 45, contactLead: 'Shri S. Mallik' },
        { id: 'kumarghat', name: 'Kumarghat-Pabiachhara', districtId: 'unakoti', boothCount: 48, contactLead: 'Shri J. Paul' }
      ]
    },
    {
      id: 'north-tripura',
      name: 'North Tripura',
      headquarters: 'Dharmanagar',
      populationApprox: '4.2 Lakhs',
      mandals: [
        { id: 'dharmanagar', name: 'Dharmanagar', districtId: 'north-tripura', boothCount: 47, contactLead: 'Shri B. Goswami' },
        { id: 'panisagar', name: 'Panisagar', districtId: 'north-tripura', boothCount: 44, contactLead: 'Shri R. Nath' },
        { id: 'jubarajnagar', name: 'Jubarajnagar', districtId: 'north-tripura', boothCount: 45, contactLead: 'Shri T. Paul' },
        { id: 'kadamtala-kurti', name: 'Kadamtala-Kurti', districtId: 'north-tripura', boothCount: 46, contactLead: 'Shri A. Islam' },
        { id: 'kanchanpur', name: 'Kanchanpur', districtId: 'north-tripura', boothCount: 48, contactLead: 'Shri P. Reang' }
      ]
    }
  ];

  getDistricts(): District[] {
    return this.districtsData;
  }

  getMandalsForDistrict(districtNameOrId: string): Mandal[] {
    if (!districtNameOrId) return [];
    const found = this.districtsData.find(
      d => d.id.toLowerCase() === districtNameOrId.toLowerCase() ||
           d.name.toLowerCase() === districtNameOrId.toLowerCase()
    );
    return found ? found.mandals : [];
  }

  getAllMandals(): Mandal[] {
    return this.districtsData.flatMap(d => d.mandals);
  }
}

