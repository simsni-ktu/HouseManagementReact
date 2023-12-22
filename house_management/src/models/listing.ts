enum issueType {
  waterLeakage = "water leakege",
  electrical = "electrical",
  windowRepair = "window repair",
  other = "other",
}
interface Listing {
  id?: string
  //residence_id?: string prohibited
  user_id: string
  price: string
  fix_deadline: Date
  issue_type: issueType
  description: string
}
