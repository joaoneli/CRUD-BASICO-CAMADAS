import { Cliente } from 'src/app/models/cliente';
import { Fornecedor } from 'src/app/models/fornecedor';
import { ClienteValidantion } from './model/cliente-validantion';
import { FornecedorValidantion } from './model/fornecedor-validantion';

export class Validations {
    static ClienteValidation(cliente: Cliente): ClienteValidantion {
        const clienteValidantion = new ClienteValidantion();

        clienteValidantion.nome = getNameClienteErrorMessage(cliente);

        clienteValidantion.cpf = getCpfClienteErrorMessage(cliente);

        clienteValidantion.endereco = getEnderecoClienteErrorMessage(cliente);

        clienteValidantion.telefone = getTelefoneClienteErrorMessage(cliente);

        return clienteValidantion;
    }

    static FornecedorValidation(fornecedor: Fornecedor): FornecedorValidantion {
        const fornecedorValidantion = new FornecedorValidantion();

        fornecedorValidantion.nome = getNameFornecedorErrorMessage(fornecedor);

        fornecedorValidantion.cnpj = getCnpjFornecedorErrorMessage(fornecedor);

        fornecedorValidantion.endereco = getEnderecoFornecedorErrorMessage(fornecedor);

        fornecedorValidantion.telefone = getTelefoneFornecedorErrorMessage(fornecedor);

        return fornecedorValidantion;
    }
}
export function getNameClienteErrorMessage(cliente: Cliente): string {
    return !cliente.nome ? 'Por favor informe o nome do cliente!' : '';
}
export function getCpfClienteErrorMessage(cliente: Cliente): string {
    return !cliente.cpf ? 'Por favor informe o cpf do cliente!' : '';
}
export function getEnderecoClienteErrorMessage(cliente: Cliente): string {
    return !cliente.endereco ? 'Por favor informe o endereço do cliente!' : '';
}
export function getTelefoneClienteErrorMessage(cliente: Cliente): string {
    return !cliente.telefone ? 'Por favor informe o telefone do cliente!' : '';
}

export function getNameFornecedorErrorMessage(fornecedor: Fornecedor): string {
    return !fornecedor.nome ? 'Por favor informe o nome do fornecedor!' : '';
}
export function getCnpjFornecedorErrorMessage(fornecedor: Fornecedor): string {
    return !fornecedor.cnpj ? 'Por favor informe o cpf do fornecedor!' : '';
}
export function getEnderecoFornecedorErrorMessage(fornecedor: Fornecedor): string {
    return !fornecedor.endereco ? 'Por favor informe o endereço do fornecedor!' : '';
}
export function getTelefoneFornecedorErrorMessage(fornecedor: Fornecedor): string {
    return !fornecedor.telefone ? 'Por favor informe o telefone do fornecedor!' : '';
}
