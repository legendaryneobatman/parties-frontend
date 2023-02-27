import { Files } from "../../files/files.entity";

export class CreatePartyDto {
  readonly id: number;
  readonly title: string;
  readonly subtitle: string;
  readonly text: string;
  readonly date: Date;
  readonly address: string;
  readonly wishList: boolean;
  readonly img: string;
  readonly files: Files[];
}
