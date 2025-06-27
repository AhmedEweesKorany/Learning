import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PropertyService {

  constructor(
    @InjectRepository(Property) private propertyRepository: Repository<Property>
  ) {

  }

  async create(createPropertyDto: CreatePropertyDto) {
   try {
     await this.propertyRepository.save(createPropertyDto);
    return {
      message: 'User created successfully',
      data: createPropertyDto,  
    };
   } catch (error) {
     return { 
       message: 'Error creating user',
       error: error.message,
     };
   }
  }

  findAll() {
    return `This action returns all property`;
  }

  findOne(id: number) {
    return `This action returns a #${id} property`;
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
