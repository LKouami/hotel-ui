import { Role } from "@/models/butler/Role";
import { deserialize } from "typescript-json-serializer";

export class Utils {
    static deserializeArray<T>(data: [], type: any): Array<T> {
        const items: Array<T> = []
        data.forEach(function (value) {
            const object = deserialize<T>(value, type)
            items.push(object)
        })
        return items;
    }

    static sortByDate(messagesView : any) {
        let sortedMessages : any = []
            sortedMessages =  messagesView.slice().sort((a,b) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          });
          return sortedMessages
    }

    
}