import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GetCharacterListResponseInterface} from "../types/get-character-list-response.interface";
import {API_BASE_URL} from "../../global/constants/api-constants";

@Injectable()
export class CharacterListService {

  constructor(private http: HttpClient) {}

  public getCharacterList(url: string): Observable<GetCharacterListResponseInterface> {
    return this.http.get<GetCharacterListResponseInterface>(API_BASE_URL + url);
  }
}
