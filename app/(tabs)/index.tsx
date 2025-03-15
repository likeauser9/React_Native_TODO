import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
// import Icon from "react-native-vector-icons/Ionicons";
import { icons } from "@/constants/icons";
import * as Svg from "react-native-svg";
import DeleteIcon from "@/assets/icons/svg/DeleteIcon";

const Index: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (): void => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index: number): void => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <TextInput
        style={styles.input}
        placeholder="Введите задачу"
        value={task}
        onChangeText={(text: string) => setTask(text)}
      />
      <Button title="Добавить" onPress={addTask} />
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          // <TouchableOpacity onPress={() => deleteTask(index)}>
          //   <Text style={styles.task}>{item}</Text>
          // </TouchableOpacity>
          <View style={styles.taskContainer}>
            <CheckBox />
            {/* <Text>{item.text}</Text> */}
            <View style={styles.icons}>
              <TouchableOpacity onPress={() => deleteTask(index)}>
                <DeleteIcon height={20} width={20} />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  taskContainer: {},
  icons: {},
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  task: {
    fontSize: 18,
    padding: 10,
    backgroundColor: "#f0f0f0",
    marginVertical: 5,
    borderColor: "red",
    borderWidth: 2,
  },
});

export default Index;
