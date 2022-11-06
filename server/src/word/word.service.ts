import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WordService {
    constructor (private prisma: PrismaService) {}

    async getWords () {
        const words = await this.prisma.word.findMany({})

        return words
    }
}
