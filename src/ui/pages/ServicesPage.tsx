import React from 'react';
import { Box, Button, Card, CardContent, Chip, Divider, Grid, Stack, Typography } from '@mui/material';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DnsIcon from '@mui/icons-material/Dns';
import TerminalIcon from '@mui/icons-material/Terminal';
import SecurityIcon from '@mui/icons-material/Security';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import TimelineIcon from '@mui/icons-material/Timeline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SchoolIcon from '@mui/icons-material/School';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { Link as RouterLink } from 'react-router-dom';

const boxHover = {
  height: '100%',
  borderRadius: 3,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1.01)',
  transform: 'translateZ(0)',
  '&:hover': {
    transform: 'translateY(-6px) scale(1.02)',
    boxShadow: '0 16px 32px rgba(0,0,0,0.1)',
    borderColor: 'primary.main',
  },
};

export const ServicesPage: React.FC = () => {
  return (
    <Stack spacing={6}>
      <Box>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Services
        </Typography>
        <Typography>
          I design, build, and run custom software that fits your processes — not the other way around. From discovery to deployment, I ship
          maintainable systems with clean integrations and pragmatic DevOps.
        </Typography>
      </Box>

      <Box>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Common use cases
        </Typography>
        <Grid container spacing={2}>
          {[
            {
              title: 'CRM & Relationship Management',
              desc: 'Custom systems for tracking customer interactions, sales pipelines, and relationship history without the complexity of enterprise CRMs.',
            },
            {
              title: 'Process Automation',
              desc: 'Eliminate repetitive tasks by automating data entry, report generation, email workflows, and cross‑system synchronization.',
            },
            {
              title: 'Decision Support Systems',
              desc: 'Dashboards and tools that aggregate data from multiple sources to provide actionable insights for better decision‑making.',
            },
            {
              title: 'Internal Tools & Portals',
              desc: 'Purpose‑built applications for your team — from project tracking to inventory management, built exactly how you need them.',
            },
            {
              title: 'Data Integration & Pipelines',
              desc: 'Connect disparate systems, sync data between platforms, and create unified views of information across your tech stack.',
            },
            {
              title: 'Legacy System Modernization',
              desc: 'Replace outdated systems with modern, maintainable applications while preserving critical business logic and workflows.',
            },
            {
              title: 'Self-hosted AI copilots',
              desc: 'Deploy secure, on-prem or private-cloud AI models that summarize data, build reports, and surface insights without sending information off-site.',
            },
          ].map((useCase) => (
            <Grid key={useCase.title} size={{ xs: 12, md: 6 }}>
              <Card variant="outlined" sx={{ ...boxHover, height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    {useCase.title}
                  </Typography>
                  <Typography color="text.secondary">{useCase.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 6 }} />

      <Box>
        <Grid container spacing={3}>
          {[
            {
              icon: <WebAssetIcon color="primary" />,
              title: 'Custom applications',
              desc: 'React/Blazor frontends and .NET/PHP backends, modeled to your workflows with clear UX and data flows.',
            },
            {
              icon: <IntegrationInstructionsIcon color="primary" />,
              title: 'Integrations & automation',
              desc: 'Connect disconnected systems and eliminate repetitive tasks. Transform manual processes into seamless workflows.',
            },
            {
              icon: <DnsIcon color="primary" />,
              title: 'Deployments you own',
              desc: 'Dockerized services on cloud or on‑prem, with secure VPN access and backups.',
            },
            {
              icon: <TerminalIcon color="primary" />,
              title: 'Operations & coaching',
              desc: 'Monitoring, CI/CD, release discipline, and project delivery coaching that sticks.',
            },
          ].map((item) => (
            <Grid key={item.title} size={{ xs: 12, md: 6 }}>
              <Card variant="outlined" sx={{ ...boxHover }}>
                <CardContent>
                  <Stack spacing={1.5}>
                    <Box>{item.icon}</Box>
                    <Typography variant="h6" fontWeight={700}>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">{item.desc}</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 6 }} />

      <Box>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Capabilities
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={1}>
          <Chip icon={<SecurityIcon />} label="Secure VPN access" variant="outlined" />
          <Chip icon={<QueryStatsIcon />} label="Actionable reporting" variant="outlined" />
          <Chip icon={<HandshakeIcon />} label="Friendly UX" variant="outlined" />
          <Chip icon={<DnsIcon />} label="Dockerized deployments" variant="outlined" />
          <Chip icon={<IntegrationInstructionsIcon />} label="Internal tools" variant="outlined" />
          <Chip icon={<DnsIcon />} label="Scalable deployments" variant="outlined" />
          <Chip icon={<AutorenewIcon />} label="Automation" variant="outlined" />
          <Chip icon={<TimelineIcon />} label="Data pipelines" variant="outlined" />
          <Chip icon={<VisibilityIcon />} label="Monitoring" variant="outlined" />
          <Chip icon={<AccountTreeIcon />} label="CI/CD" variant="outlined" />
          <Chip icon={<AccountTreeIcon />} label="Release discipline" variant="outlined" />
          <Chip icon={<SmartToyIcon />} label="Self-hosted AI workflows" variant="outlined" />
          <Chip icon={<SchoolIcon />} label="Project delivery coaching" variant="outlined" />
        </Stack>
      </Box>

      <Box>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Tech stack
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={1}>
          {[
            'React',
            '.NET',
            'C#',
            'Blazor',
            'PHP',
            'Laravel',
            'Docker',
            'Cloudflare Workers',
            'MySQL',
            'SQLite',
            'CI/CD',
            'Tailwind CSS',
            'AWS',
            'DigitalOcean',
            'Linux',
            'Ansible',
            'Terraform',
          ].map((t) => (
            <Chip key={t} label={t} />
          ))}
        </Stack>
      </Box>

      <Divider sx={{ my: 6 }} />

      <Box>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          How we work together
        </Typography>
        <Grid container spacing={3}>
          {[
            { title: 'Discovery & planning', desc: 'Initial meeting, goals, constraints, success metrics, and a pragmatic plan.' },
            { title: 'Iterative delivery', desc: 'Short cycles, demos, and feedback so value lands early and often.' },
            { title: 'Deployment & training', desc: 'Smooth rollout, documentation, and training tailored to your team.' },
            { title: 'Ongoing support', desc: 'Continuous improvements, monitoring, and a predictable change cadence.' },
          ].map((p) => (
            <Grid key={p.title} size={{ xs: 12, md: 6 }}>
              <Card variant="outlined" sx={{ ...boxHover }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={700}>
                    {p.title}
                  </Typography>
                  <Typography color="text.secondary">{p.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 6 }} />

      <Box>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Frequently asked questions
        </Typography>
        <Grid container spacing={3}>
          {[
            {
              question: 'How long does a typical project take?',
              answer:
                'Project timelines vary based on scope, but I work in iterative cycles. Most projects see initial value within 4–8 weeks, with full delivery typically spanning 2–6 months depending on complexity.',
            },
            {
              question: 'Do you work with existing systems?',
              answer:
                "Yes. I specialize in integrating with existing tools — whether that's connecting to your current CRM, syncing with accounting software, or pulling data from legacy systems.",
            },
            {
              question: 'What about ongoing maintenance?',
              answer:
                'I offer flexible support models. Some clients prefer ongoing maintenance contracts, while others engage on an as‑needed basis. You own the code, so you can also bring maintenance in‑house if preferred.',
            },
            {
              question: 'Can the system scale as we grow?',
              answer:
                'Absolutely. Solutions are built with scalability in mind from day one. Whether you need to handle more users, more data, or more complex workflows, the architecture supports growth.',
            },
            {
              question: 'What if we need changes later?',
              answer:
                'Custom software is designed to evolve. Since you own the code, changes and enhancements can be made at any time. I work with clients on both one‑time updates and ongoing feature development.',
            },
          ].map((faq, index) => (
            <Grid key={index} size={{ xs: 12, md: 6 }}>
              <Card variant="outlined" sx={{ ...boxHover, height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    {faq.question}
                  </Typography>
                  <Typography color="text.secondary">{faq.answer}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box textAlign="center">
        <Button component={RouterLink} to="/contact" variant="contained" size="large">
          Discuss your project
        </Button>
      </Box>
    </Stack>
  );
};
