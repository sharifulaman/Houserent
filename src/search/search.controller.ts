import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('properties')
export class SearchController {
  constructor(private readonly propertyService: SearchService) {}

  @Get('search')
  async search(@Query() filters: any) {
    return await this.propertyService.searchProperties(filters);
  }
}
