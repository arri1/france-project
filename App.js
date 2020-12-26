import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps'

const App = () => {
    return (
        <View style={styles.container}>
            <MapView
                style={StyleSheet.absoluteFillObject}
                provider={MapView.PROVIDER_GOOGLE}
                initialRegion={{latitude:62.03389,longitude:129.73306}}
            />

        </View>
    );
}
export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
