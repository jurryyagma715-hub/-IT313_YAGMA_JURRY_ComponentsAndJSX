import React from "react";
import { View, Text, StyleSheet } from "react-native";

type StudentCardProps = {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
};

export default function StudentCard({
  name,
  course,
  units,
  isFullLoad,
}: StudentCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>Course: {course}</Text>
      <Text>Units Enrolled: {units}</Text>

      {isFullLoad && <Text style={styles.fullLoad}>Full Load</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 18,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dddddd",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  fullLoad: {
    marginTop: 8,
    fontWeight: "bold",
  },
});
