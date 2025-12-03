import { PrismaService } from './prisma.service';
import { SensorsData, Prisma } from './generated/prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    user(userWhereUniqueInput: Prisma.SensorsDataWhereUniqueInput): Promise<SensorsData | null>;
    users(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.SensorsDataWhereUniqueInput;
        where?: Prisma.SensorsDataWhereInput;
        orderBy?: Prisma.SensorsDataOrderByWithRelationInput;
    }): Promise<SensorsData[]>;
    createUser(data: Prisma.SensorsDataCreateInput): Promise<SensorsData>;
    updateUser(params: {
        where: Prisma.SensorsDataWhereUniqueInput;
        data: Prisma.SensorsDataUpdateInput;
    }): Promise<SensorsData>;
    deleteUser(where: Prisma.SensorsDataWhereUniqueInput): Promise<SensorsData>;
}
