enum issueType {
  waterLeakage = "water leakege",
  electrical = "electrical",
  windowRepair = "window repair",
  other = "other",
}
interface Listing {
  user_id: string;
  price: string;
  fix_deadline: Date;
  issue_type: issueType;
  description: string;
}
