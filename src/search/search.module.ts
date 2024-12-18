import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Search } from './search.entity';
import { SearchService} from './search.service';
import { SearchController } from './search.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Search])],
  providers: [SearchService],
  controllers: [SearchController],
})
export class SearchModule {}
