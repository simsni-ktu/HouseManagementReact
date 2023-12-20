export function convertToResidence(userId: string, formInput: ResidenceForm): Residence {
    return {
      user_id: userId,
      city: formInput.city,
      street: formInput.street,
      rooms_number: formInput.rooms_number.toString(),
      square_meters: formInput.square_meters.toString(),
      description: formInput.description,
    };
  }

  export function convertToListing(userId: string, residence_id: string, formInput: ListingForm): Listing {
    return {
      user_id: userId,
      price: formInput.price,
      fix_deadline: formInput.fix_deadline,
      description: formInput.description,
      issue_type: formInput.issue_type,
    };
  }