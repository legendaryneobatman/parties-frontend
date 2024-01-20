export interface CreatePartyRequest {
  title: string;
  subtitle: string;
  text: string;
  date: Date;
  wishList: boolean;
  img: string;
  assignedUsers: number[];
}
