import { Town } from './Town';
import { Status } from './Status';
import { Filters } from './Filters';
import { Results } from './Results';

export interface RootState {
    town: Town,
    status: Status,
    filters: Filters,
    results: Results
}
