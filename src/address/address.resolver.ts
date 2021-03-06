import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Address } from './entities/address.entity';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';
import { AddressService } from './address.service';

@Resolver(() => Address)
export class AddressResolver {
  constructor(private readonly addressService: AddressService) {}

  @Mutation(() => Address)
  createAddress(
    @Args('createAddressInput') createAddressInput: CreateAddressInput,
  ) {
    return this.addressService.create(createAddressInput);
  }

  @Query(() => [Address], { name: 'Addresses' })
  findAll() {
    return this.addressService.findAll({});
  }

  @Query(() => Address, { name: 'Address' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.addressService.findOne(id);
  }

  @Mutation(() => Address)
  updateAddress(
    @Args('updateAddressInput') updateAddressInput: UpdateAddressInput,
  ) {
    return this.addressService.update(
      updateAddressInput.id,
      updateAddressInput,
    );
  }

  @Mutation(() => String)
  removeAddress(@Args('id', { type: () => Int }) id: number) {
    try {
      this.addressService.remove(id);
      return 'Address deleted successfully';
    } catch (e) {
      return 'Error while deleting address';
    }
  }
}
