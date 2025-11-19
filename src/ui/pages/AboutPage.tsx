import React from 'react';
import { Box, Divider, Link, Stack, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

export const AboutPage: React.FC = () => {
  return (
    <Stack spacing={6}>
      <Box>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          About
        </Typography>
        <Typography gutterBottom>
          I'm Robert Tajnšek — a full‑stack engineer and builder. I design, ship, and run custom software that fits how teams actually work.
          My approach combines technical expertise with deep understanding of business processes to create solutions that enhance
          productivity rather than complicate it.
        </Typography>
        <Typography>
          I focus on transforming manual workflows into streamlined digital processes. Whether it's relationship management, decision
          support, data tracking, or process automation — each solution is crafted to <strong>reduce friction</strong>,{' '}
          <strong>improve clarity</strong>, and give teams back their <strong>time to focus</strong> on what matters most.
        </Typography>
      </Box>

      <Divider sx={{ my: 6 }} />

      <Box>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Experience & Approach
        </Typography>
        <Typography gutterBottom>
          With experience spanning full‑stack development, infrastructure automation, and DevOps practices, I bring a pragmatic approach to
          software delivery. I've worked with businesses across various industries, helping them move from manual processes and spreadsheets
          to purpose‑built applications that scale with their growth.
        </Typography>
        <Typography>
          What sets my work apart is the focus on <strong>ownership</strong> — you own the code, the infrastructure, and the data. No vendor
          lock‑in, no per‑user licensing fees, and no forced upgrades. The solutions I build are designed to evolve with your business, not
          hold it back.
        </Typography>
      </Box>

      <Divider sx={{ my: 6 }} />

      <Box>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Links
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link
            href="https://stackoverflow.com/users/1104571"
            target="_blank"
            rel="noopener"
            sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
          >
            <QuestionAnswerIcon fontSize="small" />
            StackOverflow
          </Link>
          <Link
            href="https://github.com/ronzyfonzy"
            target="_blank"
            rel="noopener"
            sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
          >
            <GitHubIcon fontSize="small" />
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/roberttajnsek/"
            target="_blank"
            rel="noopener"
            sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
          >
            <LinkedInIcon fontSize="small" />
            LinkedIn
          </Link>
        </Stack>
      </Box>
    </Stack>
  );
};
