import SectionsData from './SectionsData.json';
import QuestionsData from './QuestionsData.json';

export class FetchStoreService {

  
    Slist:any[]=SectionsData;
    Qlist:any[]=QuestionsData;
    Answered=[];
    secNo = 1;
    QNo = 0;

    fetchNextQ(){
      this.QNo +=1;

   }
   
    storeAns(){
      
    }

  }