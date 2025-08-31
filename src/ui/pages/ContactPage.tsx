import React, { useState } from 'react';
import { Alert, Box, Button, Card, CardContent, Divider, Grid, Stack, TextField, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import ReceiptIcon from '@mui/icons-material/Receipt';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', company: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <Grid container spacing={6} maxWidth={1200} mx="auto">
      <Grid size={{ xs: 12, md: 7 }}>
        <Stack spacing={4}>
          <Box>
            <Typography variant="h3" fontWeight={800} gutterBottom>
              Let's discuss your project
            </Typography>
            <Typography color="text.secondary">
              Tell me about what you're building. I'll reply within 1–2 business days with thoughts on approach, timeline, and next steps.
            </Typography>
          </Box>

          {status === 'success' && <Alert severity="success">Message sent successfully! I'll be in touch within 1–2 business days.</Alert>}
          {status === 'error' && <Alert severity="error">Failed to send message. Please try again or email me directly.</Alert>}

          <Card variant="outlined" sx={{ borderRadius: 3 }}>
            <CardContent>
              <Stack component="form" onSubmit={handleSubmit} spacing={3}>
                <TextField label="Name" value={formData.name} onChange={handleChange('name')} required fullWidth />
                <TextField label="Email" type="email" value={formData.email} onChange={handleChange('email')} required fullWidth />
                <TextField label="Company (optional)" value={formData.company} onChange={handleChange('company')} fullWidth />
                <TextField
                  label="What problem are we solving?"
                  value={formData.message}
                  onChange={handleChange('message')}
                  multiline
                  minRows={4}
                  required
                  fullWidth
                  placeholder="Describe your current process, what's not working, and what success looks like..."
                />
                <Button type="submit" variant="contained" size="large" disabled={loading} sx={{ mt: 2 }}>
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, md: 5 }}>
        <Stack spacing={3}>
          <Typography variant="h5" fontWeight={800}>
            Get in touch
          </Typography>

          <Stack spacing={3}>
            <Stack direction="row" spacing={2} alignItems="center">
              <EmailIcon color="primary" />
              <Box>
                <Typography fontWeight={600}>Email</Typography>
                <Typography color="text.secondary">hello@robert.tajnsek.si</Typography>
              </Box>
            </Stack>
          </Stack>

          <Divider />

          <Box>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Company Information
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <BusinessIcon color="primary" />
                <Box>
                  <Typography fontWeight={600}>Business Name</Typography>
                  <Typography color="text.secondary">ARTERA, Robert Tajnšek s.p.</Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="flex-start">
                <ReceiptIcon color="primary" />
                <Box>
                  <Typography fontWeight={600}>VAT Number</Typography>
                  <Typography color="text.secondary">SI47057980</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    Registration: 6788599000 • Est. 2015
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Response time
            </Typography>
            <Typography color="text.secondary">
              I typically respond within 1–2 business days. For urgent matters, feel free to call directly.
            </Typography>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};
