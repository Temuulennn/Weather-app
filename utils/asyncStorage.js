import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (key, value) =>{
    try{
        await AsyncStorage.setItem(key, value);
    }catch(error){
        console.log('error:', error);
    }
};


export const getData = async (key) =>{
    try{
        const value = await AsyncStorage.setItem(key);
        return value;
    }catch(error){
        console.log('error:', error);
    }
};