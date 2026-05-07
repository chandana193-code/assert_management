import { Injectable } from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import {
  Observable
} from 'rxjs';

export interface Asset {

  id?: number;

  assetId?: string;

  name: string;

  category: string;

  serialNumber: string;

  purchaseDate: string;

  warrantyDate?: string;

  status: string;

  condition: string;

  cost?: number;

  location?: string;

  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  private apiUrl =
    'http://localhost:3000/asset';

  constructor(
    private http: HttpClient
  ) {}

  getAssets():
    Observable<Asset[]> {

    return this.http.get<Asset[]>(
      this.apiUrl
    );
  }

  createAsset(
    data: FormData
  ): Observable<any> {

    return this.http.post<any>(
      this.apiUrl,
      data
    );
  }

  getAssetById(
    id: number
  ): Observable<Asset> {

    return this.http.get<Asset>(
      `${this.apiUrl}/${id}`
    );
  }

  updateAsset(
    id: number,
    data: Partial<Asset>
  ): Observable<Asset> {

    return this.http.put<Asset>(
      `${this.apiUrl}/${id}`,
      data
    );
  }

  deleteAsset(
    id: number
  ): Observable<void> {

    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    );
  }
}