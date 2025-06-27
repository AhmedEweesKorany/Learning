import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async findAll() {
    return await this.propertyRepository.find();
  }
    async findOne(id: number) {
      const property = await this.propertyRepository.findOne({where:{id}});

      if (!property) {
        throw new HttpException('Property not found', HttpStatus.NOT_FOUND);
      }

      return property;
    }

  async update(id: number, updatePropertyDto: UpdatePropertyDto) {
    const property = await this.propertyRepository.findOne({where:{id}});
    if (!property) {
      throw new HttpException('Property not found', HttpStatus.NOT_FOUND);
    }
    await this.propertyRepository.update(id, updatePropertyDto);
    return {
      message: 'Property updated successfully',
      data: updatePropertyDto,
    };
  }

 async remove(id: number) {
    const property = await this.propertyRepository.findOne({where:{id}});
    if (!property) {
      throw new HttpException('Property not found', HttpStatus.NOT_FOUND);
    }
   await  this.propertyRepository.delete(id);
    return {
      message: 'Property deleted successfully',
    };
  }
}
