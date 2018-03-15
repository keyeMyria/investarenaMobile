import React from 'react';
import { SearchBar } from 'react-native-elements';
import { TouchableOpacity, StatusBar } from 'react-native';
import { styles } from './styles';

const CustomSearchHeader = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <StatusBar backgroundColor='#16254c'/>
            <SearchBar
                round={true}
                containerStyle={{ backgroundColor: '#16254c', borderTopWidth: 0}}
                inputStyle={{ backgroundColor: 'white' }}
                placeholder='Search users' />
        </TouchableOpacity>
    );
};

export default CustomSearchHeader;