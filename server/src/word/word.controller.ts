import { Controller, Get } from '@nestjs/common';
import { WordService } from './word.service';

@Controller('word')
export class WordController {
    constructor (private wordService: WordService) {}

  @Get('words')
    getWords() {
        return this.wordService.getWords()
    }
}
