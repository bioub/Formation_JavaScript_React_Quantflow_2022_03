import Counter from './fake-components/Counter.mjs';
import Dropdown from './fake-components/Dropdown.mjs';
import Profile from './fake-components/Profile.mjs';
import { configureStore } from './store/configureStore.mjs';

const store = configureStore();

const userActionsCounter = Counter(store);
Counter(store);
Counter(store);

const userActionsDropdown = Dropdown(store);

Profile(store);


userActionsCounter.click();
userActionsCounter.click();
userActionsDropdown.click();
