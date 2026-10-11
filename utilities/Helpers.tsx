// Helper function to calculate exact experience dynamically
export function getExperienceYears(startDateStr: string): string {
  const start = new Date(startDateStr);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0 || (months === 0 && now.getDate() < start.getDate())) {
    years--;
    months += 12;
  }

  // If we have 9 or more months into the current year, round up to "nearly X+1 years"
  if (months >= 9) {
    return `nearly ${years + 1} years`;
  }

  if (years >= 5) {
    return `${years}+ years`;
  }

  if (years === 0) {
    return `${months} months`;
  }

  return `${years} years and ${months} months`;
}