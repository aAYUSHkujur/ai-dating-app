import { useAppTheme } from "@/lib/theme";
import { useUser } from "@clerk/clerk-expo";
import { Stack } from "expo-router";

export default function AppLayout() {
    const { user } = useUser();
    const { colors } = useAppTheme


    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
        </Stack>
    );
}