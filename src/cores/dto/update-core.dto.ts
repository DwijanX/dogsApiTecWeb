import { CreateCoreDto } from "./create-core.dto"
import { PartialType } from '@nestjs/mapped-types';
export class UpdateCoreDto extends PartialType(CreateCoreDto) {}