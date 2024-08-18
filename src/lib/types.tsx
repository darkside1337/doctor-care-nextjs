import { Dispatch, SetStateAction } from "react";

export interface SectionType {
  id: string;
  setActiveLinkId: Dispatch<SetStateAction<string>>;
}
