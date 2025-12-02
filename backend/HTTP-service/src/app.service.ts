
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { SensorsData,Prisma } from './generated/prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async user(
    userWhereUniqueInput: Prisma.SensorsDataWhereUniqueInput,
  ): Promise<SensorsData | null> {
    return this.prisma.sensorsData.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SensorsDataWhereUniqueInput;
    where?: Prisma.SensorsDataWhereInput;
    orderBy?: Prisma.SensorsDataOrderByWithRelationInput;
  }): Promise<SensorsData[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.sensorsData.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUser(data: Prisma.SensorsDataCreateInput): Promise<SensorsData> {
    return this.prisma.sensorsData.create({
      data,
    });
  }

  async updateUser(params: {
    where: Prisma.SensorsDataWhereUniqueInput;
    data: Prisma.SensorsDataUpdateInput;
  }): Promise<SensorsData> {
    const { where, data } = params;
    return this.prisma.sensorsData.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.SensorsDataWhereUniqueInput): Promise<SensorsData> {
    return this.prisma.sensorsData.delete({
      where,
    });
  }
}
