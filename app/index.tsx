import { Redirect } from "expo-router";
import { Text } from "react-native";

export default function TabsIndex() {
  const loading = false;
  return (
    <>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <Redirect href={"./(routes)/onboarding"} />
      )}
    </>
  );
}
