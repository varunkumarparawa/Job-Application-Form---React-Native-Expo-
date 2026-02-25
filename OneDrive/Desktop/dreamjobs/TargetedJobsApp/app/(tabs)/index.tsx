import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

export default function HomeScreen() {
  const [showSkills, setShowSkills] = useState(false);

  const data = {
    missingSkills: [
      'Miro', 'Design Systems', 'UIUX Designing',
      'Prototype', 'Node.js', 'Python', 'JavaScript'
    ],
    jobs: [
      {
        id: 1,
        title: 'UIUX Designer',
        description:
          'Focus: User research, wireframing, and creating UI.',
        skills: [
          'Figma', 'Adobe XD', 'Sketch', 'Java',
          'Color theory', 'Wireframing', 'Typography'
        ]
      },
      {
        id: 2,
        title: 'Web Developer',
        description:
          'Focus: Building responsive websites.',
        skills: [
          'HTML', 'CSS', 'React', 'Node.js', 'JavaScript'
        ]
      }
    ]
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Targeted Jobs</Text>

      <Text style={styles.subText}>
        Based on your dream job, we analyze skills
        and create a learning path.
      </Text>

      {/* Missing Skills */}
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setShowSkills(!showSkills)}
      >
        <Text style={{ fontWeight: 'bold' }}>Missing Skills</Text>
        <Text>{showSkills ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {showSkills && (
        <View style={styles.skillContainer}>
          {data.missingSkills.map((skill, i) => (
            <View key={i} style={styles.chip}>
              <Text style={styles.chipText}>{skill}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Jobs */}
      <ScrollView>
        {data.jobs.map(job => (
          <View key={job.id} style={styles.card}>
            <Text style={styles.title}>{job.title}</Text>

            <Text style={styles.desc}>{job.description}</Text>

            <Text style={{ fontWeight: 'bold' }}>
              Skills required
            </Text>

            <View style={styles.skillContainer}>
              {job.skills.map((skill, i) => (
                <View key={i} style={styles.chip}>
                  <Text style={styles.chipText}>{skill}</Text>
                </View>
              ))}
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                Start Learning
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F7FB'
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  subText: {
    fontSize: 13,
    color: '#666',
    marginVertical: 10
  },
  dropdown: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  desc: {
    fontSize: 12,
    color: '#555',
    marginVertical: 6
  },
  skillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 6
  },
  chip: {
    backgroundColor: '#E6F0FF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    margin: 4
  },
  chipText: {
    fontSize: 11
  },
  button: {
    marginTop: 10,
    backgroundColor: '#2563EB',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});