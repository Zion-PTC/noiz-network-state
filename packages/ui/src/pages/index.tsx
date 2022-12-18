import React, { Component, lazy } from "react";
import styled from "styled-components";

interface FieldProps {
  className?: string;
  field: string;
  value: string;
}
class FieldProps {}

interface WalletProps {
  className?: string;
}
interface WalletState {
  isEthereum: boolean;
  isMetamask: boolean;
  isTrust: boolean;
  isTrustWallet: boolean;
}
class WalletState {}

class MetamaskWallet extends Component<
  WalletProps,
  WalletState
> {
  constructor(props: WalletProps) {
    super(props);
    let state = new WalletState();
    state.isEthereum = false;
    state.isMetamask = false;
    state.isTrust = false;
    state.isTrustWallet = false;
    this.state = state;
  }

  setIsEthereum = (isEthereum: boolean) =>
    this.setState({ isEthereum });

  setIsMetamask = (isMetamask: boolean) =>
    this.setState({ isMetamask });

  setIsTrust = (isTrust: boolean) =>
    this.setState({ isTrust });

  setIsTrustWallet = (isTrustWallet: boolean) =>
    this.setState({ isTrustWallet });

  componentDidMount(): void {
    console.log(window.ethereum);
    const eth = window.ethereum;
    if (eth) this.setIsEthereum(true);
    if (eth?.isMetaMask) this.setIsMetamask(true);
    // @ts-expect-error
    if (eth?.isTrust) this.setIsTrust(true);
    // @ts-expect-error
    if (eth?.isTrustWallet) this.setIsTrustWallet(true);
  }

  Field = (props: FieldProps) => (
    <div className={props.className}>
      <p>{props.field}</p>
      <p id="is-eth-res">{props.value}</p>
    </div>
  );
  StyledField = styled(this.Field)`
    display: inline-flex;
    #is-eth-res  {
      padding-left: 0.3rem;
      font-weight: bold;
    }
  `;

  Layout = ({ className }: WalletProps) => {
    const Field = this.StyledField;

    const isEthereum = new FieldProps();
    isEthereum.field = "is Ethereum:";
    isEthereum.value = this.state.isEthereum.toString();

    const isMetamask = new FieldProps();
    isMetamask.field = "is Metamask:";
    isMetamask.value = this.state.isMetamask.toString();

    const isTrust = new FieldProps();
    isTrust.field = "is Trust:";
    isTrust.value = this.state.isTrust.toString();

    const isTrustWallet = new FieldProps();
    isTrustWallet.field = "is TrustWallet:";
    isTrustWallet.value =
      this.state.isTrustWallet.toString();

    return (
      <div className={className} id="here">
        <p>metamask</p>
        <Field {...isEthereum} />
        <Field {...isMetamask} />
        <Field {...isTrust} />
        <Field {...isTrustWallet} />
      </div>
    );
  };
  StyledLayout = styled(this.Layout)`
    display: flex;
    flex-direction: column;
  `;

  render(): React.ReactNode {
    const Layout = this.StyledLayout;
    console.log(this.state);

    return <Layout {...this.props}></Layout>;
  }
}

export default function index() {
  return <MetamaskWallet />;
}
