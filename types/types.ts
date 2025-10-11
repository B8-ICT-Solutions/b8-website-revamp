// types.ts (optional)
export type CLineCardProps = {
    title: string;
    description: string;
    number: string;
    image: string | null;
    delay: number;
  };
  
  export type CLineCardContainerProps = {
    cardsData: CLineCardProps[];
  };
  