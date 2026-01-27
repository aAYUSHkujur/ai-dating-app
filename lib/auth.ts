import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

export const tokenCache = {
    async getToken(key: string) {
        try {
            if (Platform.OS === "web") {
                return null;
            }
            const item = await SecureStore.getItemAsync(key);
            return item;
        } catch (error) {
            console.error("Error getting token from SecureStore:", error);
            await SecureStore.deleteItemAsync(key);
            return null;
        }
    },
    async saveToken(key: string, value: string) {
        try {
            if (Platform.OS === "web") {
                return;
            }
            return SecureStore.setItemAsync(key, value);
        } catch (error) {
            console.error("Error saving token to SecureStore:", error);
        }
    },
    async clearToken(key: string) {
        try {
            if (Platform.OS === "web") {
                return;
            }
            return SecureStore.deleteItemAsync(key);
        } catch (error) {
            console.error("Error clearing token from SecureStore:", error);
        }
    }
}

