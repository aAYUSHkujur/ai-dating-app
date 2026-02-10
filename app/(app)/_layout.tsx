import { useAppTheme } from "@/lib/theme";
import { useUser } from "@clerk/clerk-expo";
import { useQuery } from "convex/react";
import { Stack } from "expo-router";

export default function AppLayout() {
    const { user } = useUser();
    const { colors } = useAppTheme

    const profile = useQuery(
        api.users.getByClerkId,
        user?.id ? { clerkId: user.id } : "skip"
    );

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
        </Stack>
    );
}