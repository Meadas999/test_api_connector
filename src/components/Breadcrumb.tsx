'use client';
import { useRouter } from 'next/navigation';
import { Breadcrumbs, Link, Typography, Box, Button } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import HomeIcon from '@mui/icons-material/Home';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  showBackButton?: boolean;
}

export default function Breadcrumb({ items, showBackButton = true }: BreadcrumbProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleNavigate = (href: string) => {
    router.push(href);
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2, 
      mb: 3,
      p: 2,
      backgroundColor: '#f5f5f5',
      borderRadius: 1,
      border: '1px solid #e0e0e0'
    }}>
      {showBackButton && (
        <Button
          variant="outlined"
          size="small"
          startIcon={<NavigateBeforeIcon />}
          onClick={handleBack}
          sx={{ minWidth: 'auto' }}
        >
          Back
        </Button>
      )}
      
      <Breadcrumbs aria-label="breadcrumb" sx={{ flex: 1 }}>
        <Link
          underline="hover"
          sx={{ 
            display: 'flex', 
            alignItems: 'center',
            cursor: 'pointer',
            color: 'primary.main'
          }}
          onClick={() => handleNavigate('/')}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        
        {items.map((item, index) => (
          item.current ? (
            <Typography key={index} color="text.primary" sx={{ fontWeight: 500 }}>
              {item.label}
            </Typography>
          ) : (
            <Link
              key={index}
              underline="hover"
              color="inherit"
              sx={{ cursor: 'pointer' }}
              onClick={() => item.href && handleNavigate(item.href)}
            >
              {item.label}
            </Link>
          )
        ))}
      </Breadcrumbs>
    </Box>
  );
}