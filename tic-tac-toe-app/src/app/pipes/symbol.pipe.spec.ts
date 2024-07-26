import { provideMockStore } from '@ngrx/store/testing';
import { SymbolPipe } from './symbol.pipe';
import { PlayerState } from '../store/players/players.reducer';
import { ActionsSubject, ReducerManager, StateObservable, Store } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';
import { Keys } from '../store';
import { of } from 'rxjs';




describe('SymbolPipe', () => {
    const playerState: PlayerState = {
        player_one: 'test',
        player_two: 'hello',
        scores: {'': 0},
        active: 'test'
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [
            // any modules needed
          ],
          providers: [
            provideMockStore<PlayerState>({initialState: playerState, selectors: [{ selector: Keys.PLAYER_KEY, value: playerState}]}),
            // other providers
          ],
        });
     
        // store = TestBed.get<Store>(Store);
        // guard = TestBed.get<AuthGuard>(AuthGuard);
      });
      
    it('create an instance', () => {
        const t: any = 't'
        const y: any = 'y'
        const x: any = 'x'
        const store = new Store<{ playersKey: PlayerState; }>(x, t, y)
        const pipe = new SymbolPipe(store);
        expect(pipe).toBeTruthy();
    });
});
