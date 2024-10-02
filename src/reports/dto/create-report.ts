import { IsString, IsNumber } from "class-validator";

export class createReportDto {
    @IsNumber()
    id: number;

    @IsString()
    title: string;

    @IsString()
    description: number;
}