import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";

import StudentCard from "./StudentCard";

const initialStudents = [
  {
    id: "s1",
    name: "Ana Cruz",
    course: "IT313",
    units: 21,
    isFullLoad: true,
  },
  {
    id: "s2",
    name: "Bea Santos",
    course: "IT313",
    units: 15,
    isFullLoad: false,
  },
  {
    id: "s3",
    name: "Cid Ramos",
    course: "IT313",
    units: 18,
    isFullLoad: true,
  },
  {
    id: "s4",
    name: "Dex Alonzo",
    course: "IT313",
    units: 12,
    isFullLoad: false,
  },
];

export default function StudentRoster() {
  const [students, setStudents] = useState(initialStudents);

  const reverseRoster = () => {
    setStudents([...students].reverse());
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Student Roster</Text>

      <Text style={styles.count}>{`${students.length} students`}</Text>

      <Button title="Reverse Roster" onPress={reverseRoster} />

      <View style={styles.list}>
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            units={student.units}
            isFullLoad={student.isFullLoad}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  count: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 20,
  },
  list: {
    marginTop: 20,
  },
});
