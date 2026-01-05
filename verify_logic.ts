
import { getCurrentParashaIsrael, getCurrentHebrewDate } from './src/utils/hebrewCalendar';

console.log('--- Verifying Hebrew Calendar Logic ---');
const hDate = getCurrentHebrewDate();
console.log(`Current Hebrew Date: ${hDate.toString()}`);

const parasha = getCurrentParashaIsrael();
console.log(`Current Parasha (Israel): ${parasha.join(', ')}`);

if (parasha.length > 0) {
    console.log('SUCCESS: Parasha detected.');
} else {
    console.warn('WARNING: No Parasha detection (could be correct if holiday or special gap, but check manually).');
}
