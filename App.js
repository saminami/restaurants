import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator(
    {
        Search: SearchScreen,
        ResultsShow: ResultsShowScreen,
    },
    {
        initalRouteName: 'Search',
        defaultNavigationOptions: {
            title: 'Restaurant Search'
        }
    }
);

export default createAppContainer(navigator);
