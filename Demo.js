import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import * as Updates from "expo-updates";

const Demo = () => {
  const { currentlyRunning, isUpdateAvailable, isUpdatePending } =
    Updates.useUpdates();
  const showDownloadButton = isUpdateAvailable;

  React.useEffect(() => {
    if (isUpdatePending) {
      Updates.reloadAsync();
    }
  }, [isUpdatePending]);

  const runTypeMessage = currentlyRunning.isEmbeddedLaunch
    ? "This app is running from built-in code"
    : "This app is running an update";

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Updates Demo</Text>
      <Text>{runTypeMessage}</Text>
      <Button
        pressHandler={() => Updates.checkForUpdateAsync()}
        text="Check manually for updates"
      />
      {showDownloadButton && (
        <Button
          pressHandler={() => Updates.fetchUpdateAsync()}
          text="Download and run update"
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
};

export default Demo;

const styles = StyleSheet.create({});
