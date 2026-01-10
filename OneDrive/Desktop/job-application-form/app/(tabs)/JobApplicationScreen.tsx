import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from "react-native";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const JobApplicationScreen = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    experience: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d+$/.test(form.mobile)) {
      newErrors.mobile = "Mobile number should contain only digits";
    }

    if (!form.experience.trim()) {
      newErrors.experience = "Experience is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    console.log("Submitted Data:", form);

    Alert.alert(
      "Application Submitted",
      "Your job application has been submitted successfully."
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.safeArea}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <StatusBar barStyle="light-content" />

      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Job Application</Text>
        <Text style={styles.subtitle}>
          Please fill in the details below
        </Text>

        <CustomInput
          label="Full Name"
          value={form.fullName}
          onChangeText={(v) => handleChange("fullName", v)}
          error={errors.fullName}
        />

        <CustomInput
          label="Email Address"
          keyboardType="email-address"
          value={form.email}
          onChangeText={(v) => handleChange("email", v)}
          error={errors.email}
        />

        <CustomInput
          label="Mobile Number"
          keyboardType="numeric"
          value={form.mobile}
          onChangeText={(v) => handleChange("mobile", v)}
          error={errors.mobile}
        />

        <CustomInput
          label="Years of Experience"
          keyboardType="numeric"
          value={form.experience}
          onChangeText={(v) => handleChange("experience", v)}
          error={errors.experience}
        />

        <View style={styles.buttonWrapper}>
          <CustomButton
            title="Submit Application"
            onPress={handleSubmit}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default JobApplicationScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#aaaaaa",
    textAlign: "center",
    marginBottom: 24,
  },
  buttonWrapper: {
    marginTop: 10,
  },
});
