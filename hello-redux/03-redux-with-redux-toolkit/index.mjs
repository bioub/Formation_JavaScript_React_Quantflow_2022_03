import Counter from './fake-components/Counter.mjs';
import Dropdown from './fake-components/Dropdown.mjs';
import Profile from './fake-components/Profile.mjs';
import reduxtlk from '@reduxjs/toolkit';
import { reducer } from './store/reducers.mjs';

const store = reduxtlk.configureStore({reducer: reducer});

const userActionsCounter = Counter(store);
Counter(store);
Counter(store);

const userActionsDropdown = Dropdown(store);

Profile(store);


userActionsCounter.click();
userActionsCounter.click();
userActionsDropdown.click();
