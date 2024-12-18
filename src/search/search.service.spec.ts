import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Search } from './search.entity';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(Search)
    private propertyRepository: Repository<Search>,
  ) {}

  async searchProperties(filters: any): Promise<Search[]> {
    const query = this.propertyRepository.createQueryBuilder('search');
    
    if (filters.category) query.andWhere('search.category = :category', { category: filters.category });
    if (filters.division) query.andWhere('search.division = :division', { division: filters.division });
    if (filters.district) query.andWhere('search.district = :district', { district: filters.district });
    if (filters.area) query.andWhere('search.area = :area', { area: filters.area });
    if (filters.propertyId) query.andWhere('search.propertyId = :propertyId', { propertyId: filters.propertyId });

    return await query.getMany();
  }
}
