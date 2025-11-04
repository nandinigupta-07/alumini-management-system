export function verifyInstitute({ name, domainOrCode }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const normalized = `${name} ${domainOrCode}`.toLowerCase();
      const verified = normalized.includes('edu') || normalized.includes('univ') || domainOrCode === 'VERIFIED';
      resolve({ verified });
    }, 900);
  });
}


