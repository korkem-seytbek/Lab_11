import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export function ContactSection() {
  // Состояния для хранения ввода пользователя [cite: 142-147]
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Функция обработки нажатия на кнопку [cite: 148-153]
  const handleSubmit = () => {
    if (email && phone && message) {
      setSubmitted(true);
      // Скрытие сообщения через 3 секунды [cite: 151]
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  // Проверка: заполнены ли все поля [cite: 193]
  const isFormValid = email && phone && message;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Information</Text>

      {/* Поле ввода Email [cite: 157-167] */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="your@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Поле ввода Телефона [cite: 168-180] */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Phone</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="+1 234 567 8900"
          keyboardType="phone-pad"
        />
      </View>

      {/* Поле ввода Сообщения [cite: 181-190] */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Message</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={message}
          onChangeText={setMessage}
          placeholder="Your message..."
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
      </View>

      {/* Кнопка отправки [cite: 191-196] */}
      <TouchableOpacity
        style={[styles.button, !isFormValid && styles.buttonDisabled]}
        onPress={handleSubmit}
        disabled={!isFormValid}
      >
        <Text style={styles.buttonText}>Send Message</Text>
      </TouchableOpacity>

      {/* Сообщение об успешной отправке [cite: 197-201] */}
      {submitted && (
        <View style={styles.successMessage}>
          <Text style={styles.successText}>Message sent successfully!</Text>
        </View>
      )}
    </View>
  );
}

// Стилизация компонента согласно заданию [cite: 205-273]
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    margin: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#eee',
  },
  textArea: {
    height: 100,
  },
  button: {
    backgroundColor: '#0066cc',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  successMessage: {
    backgroundColor: '#d4edda',
    borderRadius: 8,
    padding: 12,
    marginTop: 16,
    alignItems: 'center',
  },
  successText: {
    color: '#155724',
    fontSize: 14,
    fontWeight: '600',
  },
});